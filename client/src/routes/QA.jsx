import { Outlet, Link, useLoaderData, Form } from "react-router-dom";

export default function QA() {
    return (
        <div id="sidebar" style={{marginTop: 80}}>
             <div style={{position: 'absolute', top: 0, width: '100%'}}>
      </div>
          <h1>React QA Contacts</h1>
            <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
    );
  }