import { GetServerSideProps } from "next";
import { masterClassesData } from "../../../data";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data: any[] = masterClassesData;
  const fields: ISitemapField[] = data.map((masterclass) => ({
    loc: `https:www.somasanaa.com/masterclass/${masterclass.id}`,
    lastmod: new Date().toISOString(),
  }));
  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
