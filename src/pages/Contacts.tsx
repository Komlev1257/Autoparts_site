import React from "react";
import { YMaps, Map, GeoObject } from "@pbe/react-yandex-maps";
import styles from "./contacts.module.css";

const Contacts: React.FC = () => {
  const address = "ул. Автозапчастей, 123";
  const phone = "+1 234 567 890";
  const email = "info@autoshop.com";
  const organizationName = "Автомобис Пик";

  const mapState = {
    center: [55.636186, 37.646201],
    zoom: 10,
  };

  return (
    <div className={styles.contacts}>
      <div className={styles.info}>
        <h2>Контактная информация</h2>
        <p>
          <strong>Адрес:</strong> {address}
        </p>
        <p>
          <strong>Телефон:</strong> {phone}
        </p>
        <p>
          <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
      <div className={styles.map}>
        <YMaps>
          <Map state={mapState} width="100%" height="400px">
            <GeoObject
              geometry={{
                type: "Point",
                coordinates: [55.636186, 37.646201],
              }}
              properties={{
                iconContent: organizationName,
                balloonContent: `<strong>${organizationName}</strong><br>${address}`,
              }}
              options={{
                preset: "islands#blueStretchyIcon",
              }}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default Contacts;
