import { GetServerSideProps } from "next";
import { masterClassesData } from "../../../data";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data: any[] = masterClassesData;
  const fields: ISitemapField[] = data.map((lesson) => ({
    loc: `https:www.somasanaa.com/masterclass/${lesson.id}`,
    lastmod: new Date().toISOString(),
  }));
  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
