// An exported Footer components that display "Oakhalo" and the current year.
export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
      <div>
        <footer>
          <p>Oakhalo &copy; {currentYear}</p>
        </footer>
      </div>
    );
  }
