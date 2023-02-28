import { Outlet, Form } from "react-router-dom";

const Root = () => {
  const styles = {
    Buttons: {
      width: '15%', 
      height: '100%',
      marginLeft: '2.5%',
      marginRight: '2.5%'
      },
      buttonText: {
        background: '#f16777',
        borderWidth: 0,
        width: '100%',
        height: '100%',
        fontSize: 60,
        fontFamily: 'fantasy',
      }
    }
  return (
    <>
    <div style={{
        width: '100%',
        height: 80,
        background: 'gray',
        flexDirection: 'row',
        display: 'flex',
        position: "fixed",
        top: 0,
        zIndex: 10
    }}>
        <Form action="/Home" style={styles.Buttons}>
        <button style={styles.buttonText}>Home</button>
      </Form>
      <Form action="/Hotels" style={styles.Buttons}>
        <button style={styles.buttonText}>Hotels</button>
      </Form>
      <Form action="/QA" style={styles.Buttons}>
        <button style={styles.buttonText}>QA</button>
      </Form>
      <Form action="/Help" style={styles.Buttons}>
        <button style={styles.buttonText}>HELP</button>
      </Form>
      <Form action="/Login" style={styles.Buttons}>
        <button style={styles.buttonText}>Map</button>
      </Form>
    </div>
    <Outlet/>
    </>
)
};

export default Root;