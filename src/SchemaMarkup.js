// src/SchemaMarkup.js
import React from "react";
import { Helmet } from "react-helmet";
import { realEstateAgentSchema } from './Schema/HomeSchema';
import { BreadCrumb } from './Schema/BreadCrumb';
import { blogPostingSchema1, blogPostingSchema2, blogPostingSchema3, blogPostingSchema4, blogPostingSchema5 } from './Schema/BlogSchema';
 
const SchemaMarkup = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(realEstateAgentSchema, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(blogPostingSchema1, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(blogPostingSchema2, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(blogPostingSchema3, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(blogPostingSchema4, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(BreadCrumb, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(blogPostingSchema5, null, 2)}
      </script>
    </Helmet>
  );
};
 
export default SchemaMarkup;
 
 