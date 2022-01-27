import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Airtable from "airtable";
import '../styles/globals.css'

const AppContext = createContext();

function AppWrapper({ children }) {
  const router = useRouter();
  const [record, setRecord] = useState();

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      const recordKey = id[0];
      // Should use env for api keys
      const base = new Airtable({ apiKey: "keyIwpcQ1fBXlxCcq" }).base(
        "app4MqGYcYLzCIZTb"
      );
      base("Table 1").find(recordKey, (err, record) => {
        if (err) {
          console.error(err);
          return;
        }

        setRecord(record);
      });
    }
  }, [router.query]);

  return (
    <AppContext.Provider value={{ record }}>
      {children}
    </AppContext.Provider>
  );
}

function MyApp({ Component, pageProps }) {

  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp

export function useAppContext() {
  return useContext(AppContext);
}
