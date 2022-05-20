const secondsToHms = (d) => {
  var duration = Number(d);
  var h = Math.floor(duration / 3600);
  var m = Math.floor((duration % 3600) / 60);
  var s = Math.floor((duration % 3600) % 60);

  var hDisplay =
    h > 0
      ? h +
        (h == 1 ? ` hour ${s > 0 ? "," : ""} ` : ` hours ${s > 0 ? "," : ""} `)
      : "";
  var mDisplay =
    m > 0
      ? m +
        (m == 1
          ? ` minute ${s > 0 ? "," : ""} `
          : ` minutes ${s > 0 ? "," : ""} `)
      : "";
  var sDisplay = s > 0 ? s + (s == 1 ? ` second` : " seconds") : "";
  return hDisplay + mDisplay + sDisplay;
};

export default secondsToHms;
