import React from "react";
import Layout from "../components/layouts/Layout";
import WPAPI from "wpapi";
import config, { fetcher } from "../config";
import Culture from "../components/career/culture";

const Careers = ({ mainMenu, topMenu, data }) => {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">
        <Culture data={data} />
      </div>
    </Layout>
  );
};

Careers.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );

  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  const catId = await wp
    .categories()
    .slug(`careers`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .perPage(100)
    .embed();

  return { mainMenu, topMenu, data };
};

export default Careers;
