import { useId } from "react";

// used inside the StaticStory component in packages/unity-react-core/.storybook/decorators.tsx
export const identifierPrefix = "staticMarkup";

export function useBaseSpecificFramework() {

  const id = useId();
  const isBootstrap = id.indexOf(identifierPrefix) > -1 ? true : undefined;
  const isReact = !isBootstrap ? true : undefined;

  return {
    isBootstrap,
    isReact,
  };
}

