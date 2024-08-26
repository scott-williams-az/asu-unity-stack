pipeline {
    agent {
        kubernetes {
            yaml """
apiVersion: v1
kind: Pod
spec:
  serviceAccountName: jenkins
  securityContext:
    runAsUser: 1000 # default UID of jenkins user to node user in agent image
  containers:
  - name: node20
    image: 'node:20.15'
    imagePullPolicy: Always
    command:
    - cat
    tty: true
  - name: puppeteer
    image: 'ghcr.io/puppeteer/puppeteer:22'
    imagePullPolicy: Always
    command:
    - cat
    tty: true
  imagePullSecrets:
  - name: docker-hub-credentials
"""
        }
    }
    environment {
        HOME='.'
        RAW_GH_TOKEN = credentials('github-org-asu-pac')
        NPM_TOKEN = credentials('NPM_TOKEN')
        NODE_AUTH_TOKEN = credentials('github-org-asu-pac')
        PERCY_TOKEN = credentials('PERCY_TOKEN')
    }
    options {
      buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
      disableConcurrentBuilds()
    }
    stages {
        stage('Developer release') {
            when {
                branch 'testing'
            }
            steps {
                container('node20') {
                  script {
                    echo '## Configure env file for @asu registry...'
                    writeFile file: '.env', text: 'GITHUB_AUTH_TOKEN=' + env.RAW_GH_TOKEN_PSW
                    echo '## Install and build Unity monorepo...'
                    sh 'yarn install --immutable'
                    sh 'yarn build'

                    withEnv(["GH_TOKEN=${RAW_GH_TOKEN_PSW}"]) {
                      echo '## Publishing packages...'
                      sh 'yarn publish-packages'
                    }
                  }
                }
            }
        }
        stage('Build') {
            steps {
                container('node20') {
                  withEnv(["GITHUB_AUTH_TOKEN=${RAW_GH_TOKEN_PSW}"]) {
                    echo '## Install and build Unity monorepo...'
                    sh 'yarn -v'
                    sh 'node -v'
                    sh 'npm -v'
                    sh 'yarn install'
                    sh 'yarn build'
                  }
                }
            }
        }
        stage('Test') {
            steps {
                container('node20') {
                    echo '## Running jests tests...'
                    sh 'yarn test'
                }
            }
        }
        stage('Visual Regression Testing') {
          when {
            allOf {
              expression { env.CHANGE_TARGET == 'dev' }
              expression { // Only run if there are changes in packages directory
                sh(returnStatus: true, script: 'git diff origin/dev... --name-only | grep --quiet "^packages/.*"') == 0
              }
            }
          }
          steps {
              container('node20') {
                echo 'building storybook...'
                sh 'yarn build-storybook'
              }
              container('puppeteer') {
                  echo 'running percy tests...'
                  sh 'yarn percy-test'
              }
          }
        }
        stage('Publish') {
            when {
                branch 'dev'
            }
            steps {
                container('node20') {
                    script {
                      withEnv(["GH_TOKEN=${RAW_GH_TOKEN_PSW}"]) {
                      echo '## Publishing packages...'
                      sh 'yarn publish-packages'
                      }
                    }
                }
            }
        }
        stage('Deploy') {
            when {
              branch 'dev'
            }
            steps {
                container('node20') {
                    script {
                        echo '# Final, post-publish install and build to include just published pkgs...'
                        sh 'yarn install --immutable'
                        sh 'yarn build-storybook'

                        withEnv(["GH_TOKEN=${RAW_GH_TOKEN_PSW}"]) {
                          // Must pass branch name "dev" and "PUSH" for script to deploy
                          // If branch!=="dev" build will be nested inside a folder
                          sh "node ./scripts/deploy-gh-pages.js dev PUSH"

                        }
                    }
                }
            }
        }
    }
}
