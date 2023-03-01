import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const PolicyPage = () => {
  return (
    <Layout>
      <h1>Policies</h1>
      <h2>Privacy Policy</h2>
				<h3>免責事項</h3>
				<p>当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>
				<h3>著作権</h3>
				<p>当ブログに掲載されている文章・画像の著作権は、運営者に帰属しています。法的に認められている引用の範囲を超えて、無断で転載することを禁止します。また、当ブログは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、ご連絡ください。迅速に対応いたします。</p>
				<h3>リンクについて</h3>
				<p>当ブログは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。</p>
				<p>(2023/3/1 更新)</p>
      <h2>Terms</h2>
      <h2>Licence</h2>
      <h2 id="contact">Contact</h2>
    </Layout>
  )
};

export const Head = () => <Seo title="Terms & Privacy" />;
export default PolicyPage;
