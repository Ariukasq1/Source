import React from "react";
import Layout from "../components/layouts/Layout";
import WPAPI from "wpapi";
import config, { fetcher } from "../config";
import HomeBrands from "../components/home/brands";

const Brands = ({ mainMenu, topMenu, childCats, data }) => {
  return (
    <Layout mainMenu={mainMenu} topMenu={topMenu}>
      <div className="page">
        <HomeBrands brandCats={childCats} brands={data} page="brands" />
      </div>
    </Layout>
  );
};

Brands.getInitialProps = async (context) => {
  const wp = new WPAPI({ endpoint: config(context).apiUrl });

  const mainMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu`
  );

  const topMenu = await fetcher(
    `${config(context).apiUrl}/menus/v1/menus/nav-menu-top`
  );

  const catId = await wp
    .categories()
    .slug(`brands`)
    .embed()
    .then((data) => data[0]);

  const data = await wp
    .posts()
    .categories((catId || {}).id)
    .perPage(100)
    .embed();

  const childCats = await wp
    .categories()
    .parent((catId || {}).id)
    .embed();

  return { mainMenu, topMenu, data, childCats };
};

export default Brands;
