export default function imageLoader({ src, width, quality }) {
  //   const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `http://strapi.gidebilirmiyim.com:1337/uploads/${src}`;
}
