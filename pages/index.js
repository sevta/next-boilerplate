import Layout from "components/Layout";
import Link from "next/link";

export default function Homepage() {
  return (
    <Layout className="flex items-end space-x-3 justify-center">
      <div className="title">Boilerplate.</div>
      <Link href="/about" passHref>
        <div className="link">about</div>
      </Link>
    </Layout>
  );
}
