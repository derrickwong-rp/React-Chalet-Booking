import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";
import BookingForm from "./BookingForm";

export default function App() {
  return (
    <>
      <Header />
      <div className="App">
        <h1 className="title">Chalet Booking Calculator</h1>
        <BookingForm />
      </div>
      <Footer color="skyblue" />
    </>
  );
}
