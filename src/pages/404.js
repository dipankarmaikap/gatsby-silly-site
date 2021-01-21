import React from "react";
import Layout from "../components/base/Layout";
import SEO from "../components/base/SEO";

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="#SillySiteChallange - 404: Not found"
      description="You just hit a route that doesn't exist"
    />
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-4">404 NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
