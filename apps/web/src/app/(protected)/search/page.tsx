import { db } from "@/server/db";
import { SearchClient } from "./SearchClient";

export default async function SearchPage() {
  const totalRecords = await db.mediaRecord.count();
  return <SearchClient totalRecords={totalRecords} />;
}
