import { Outlet, Link, useLoaderData, Form } from "react-router-dom";

export default function Help() {
    return (
        <div style={{marginTop: 80 }}>
          <h1>React Helps Contacts</h1>
            <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
    );
  }