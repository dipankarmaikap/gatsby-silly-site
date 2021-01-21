import React from "react";
import Layout from "../components/base/Layout";
import SEO from "../components/base/SEO";
import TodoList from "../components/todo/TodoList";
import TodoForm from "../components/todo/TodoForm";

const IndexPage = () => (
  <Layout>
    <SEO
      title="#SillySiteChallange - Talking todo list"
      description="A todo list that speaks. Created for gatsby SillySiteChallange"
    />
    <div className="homepage border-2 border-gray-900 dark:border-gray-100 bg-blue-100 rounded-lg dark:bg-gray-800 p-4 py-8 text-gray-800 dark:text-gray-100 smooth">
      <h1 className="text-4xl font-bold text-center">Talking TodoList</h1>
      <TodoForm />
      <TodoList />
    </div>
  </Layout>
);

export default IndexPage;
