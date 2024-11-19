function getRootDomain(url)
                    {
                        try
                        {
                            var domain = new URL(url).hostname;
                            var elems = domain.split('.');
                            var iMax = elems.length - 1;
                            var isSecondLevel = elems.length >= 3 && (elems[iMax] + elems[iMax - 1]).length <= 5;
                            return elems.splice(isSecondLevel ? -3 : -2).join('.');
                        }
                        catch (error)
                        {
                            return null;
                        }
                    }

                    function loadScript(src, onSuccess, onError)
                    {
                        var script = document.createElement('script');
                        script.src = src;
                        script.onload = function() {
                            if (onSuccess) onSuccess();
                        };
                        script.onerror = function() {
                            if (onError) onError();
                        };
                        document.head.appendChild(script);
                    }

                    function initCassieWidget()
                    {
                        var cassieSettings = {
                            widgetProfileId: 1,
                            languageCode: "",
                            licenseKey: "55F4885B-41C9-4834-83F9-3924FCB2D7D3",
                            region: "use",
                            environment: "uat",
                            crossDomainConsent: false
                        };
                        window.CassieWidgetLoader = new CassieWidgetLoaderModule(cassieSettings);
                    }

                    function loadScriptWithFallback()
                    {
                        var rootDomain = getRootDomain(window.location.href);
                        var scriptUrl = rootDomain ? 'https://cscript-cdn-use-uat.'+rootDomain+'/loader.js':'https://cscript-cdn-use-uat.cassiecloud.com/loader.js';
                        loadScript(scriptUrl, function() {
                            window.cassieResourceRootDomain = rootDomain;
                            initCassieWidget();
                        }, function() {
                            loadScript('https://cscript-cdn-use-uat.cassiecloud.com/loader.js', function() {
                                initCassieWidget();
                            });
                        });
                    }

                    loadScriptWithFallback();
