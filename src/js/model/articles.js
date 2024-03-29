export const introductionToStreams = {
  sectionTitle: 'Introduction to Streams',
  sectionSource: '',
  highlights: {
    highlight1: ['Streams'],
  },
  tooltips: [
    `<p>Streams are used to <i><b>process (read and write) data piece by piece (chunks)</b>, without completing the whole read or write operation</i>, and therefore without keeping all the data in memory.</p>
    <ul>Benefits of using streams:
      <li>- perfect for handling large volumes of data, for example videos;</li>
      <li>- More efficient data processing in terms of <u>memory</u> (no need to keep all data in
        memory) and <u>time</u> (we don't have to wait until all the data is available).</li>
    </ul>
    <p><img src="../../src/img/streams_1.jpg"/></p>
    `,
    `<h3>Streams in practice</h3>
    <pre><code>
const fs = require("fs");
const server = require("http");

server.createServer((req, res) => {
// ---- Solution 1 ----
<i>fs.readFile</i>("test-file.txt", (err, <i>data</i>) => {
if (err) console.log(err);
<i>res.end(data);</i>
});


// ---- Solution 2: Streams ----
const readable1 = <i>fs.<b>createReadStream</b></i>("test-file.txt");

readable1<i>.on(<b>"data"</b>, <b>chunk</b> => {
res.write(chunk);
})</i>;

readable1<i>.on(<b>"end"</b>, () => {
res.end();
})</i>;

readable1<i>.on("error", err => {
res.statusCode = 500;
res.end("File not found!");
})</i>;


// ---- Solution 3: Streams ----
const readable2 = <i>fs<b>.createReadStream</b></i>("test-file.txt");
readable2<i><b>.pipe</b>(res)</i>;
});

server.listen(3000);
  </code></pre>`,
  ],
};
