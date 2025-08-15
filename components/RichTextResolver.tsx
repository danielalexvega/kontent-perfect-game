import { Elements } from "@kontent-ai/delivery-sdk";
import { transformToPortableText } from "@kontent-ai/rich-text-resolver";
import { PortableText, PortableTextReactResolvers } from "@kontent-ai/rich-text-resolver/utils/react";
import React from "react";

import { EventNavigationType } from "@/types/event-navigation-type.generated";
import { ArticleLayoutType } from "@/types/article-layout-type.generated";
import EventNavigation from "./EventNavigation";
import ArticleLayout from "./ArticleLayout";

type ElementProps = Readonly<{
  element: Elements.RichTextElement;
  isInsideTable: boolean;
}>;


const createRichTextResolver = (
  element: Elements.RichTextElement,
  isElementInsideTable: boolean = false,
  componentIndex = 0,
): PortableTextReactResolvers => ({
  types: {
    // Resolution for components and content items inserted in rich text
    componentOrItem: (props) => {
      const { value } = props;
      const componentItem = element.linkedItems.find((i) => i.system.codename === value.componentOrItem._ref);
      console.log('componentItem', componentItem);

      if (!componentItem) {
        throw new Error(
          "Component item not found, probably not enough depth requested."
        );
      }

      switch (componentItem.system.type) {
        case 'event_navigation':
          return <EventNavigation pages={(componentItem.elements.event_navigation as any)?.linkedItems || []} />;
        case 'article_layout':
          return <ArticleLayout articles={(componentItem.elements.article_layout as any)?.linkedItems || []} />;
        default:
          return null;
      }

    },
    // Resolution for tables in rich text
    table: undefined,
    // Resolution for assets in rich text
    image: undefined,
  },
  marks: {
    // Resolution for links to external URLs
    link: undefined, 
    // Resolution for links to content items
    contentItemLink: undefined,
  },
  block: {
    // Examples of custom resolution for default blocks
    h1: undefined, // h1 headings
    p: undefined, // paragraphs
  },
});

type RichTextComponentProps = {
  richTextElement: Elements.RichTextElement;
};

// Custom React component that renders your rich text element
export const RichTextComponent: React.FC<RichTextComponentProps> = (props) => {
  // Converts a Kontent.ai rich text element value to portable text
  const portableText = transformToPortableText(props.richTextElement.value);

  // Renders content based on the specified transformations
  return (
    <PortableText
      value={portableText}
      components={createRichTextResolver(props.richTextElement)}
    />
  );
};