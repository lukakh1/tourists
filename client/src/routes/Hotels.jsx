import { Outlet, Link, useLoaderData, Form } from "react-router-dom";

export default function Hotels() {
    return (
        <div id="sidebar" style={{marginTop: 80}}>
          <h1>React Hotelss Contacts</h1>
            <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
    );
  }