import { Circle } from "better-react-spinkit";
const Loading = () => {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png"
          alt="WhatsApp"
          height={200}
          style={{ marginBottom: 10 }}
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
};

export default Loading;
