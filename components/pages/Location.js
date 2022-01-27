import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Airtable from "airtable";

export default function Location() {
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query
    if (id) {
      const recordKey = id[0];
      const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_KEY);
      base(process.env.AIRTABLE_TABLE_NAME).find(recordKey, (err, record) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log('Received: ', record);
      });
    }
  }, [router.query]);

  return <div>dfsfdsd</div>;
}
