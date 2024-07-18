import { useState } from 'react';
import { Container } from './example.styles';
import { Client } from "@gradio/client"; // Added import

export const ExampleComponent = () => {
  const [urls, setUrls] = useState("");
  const [keywords, setKeywords] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const app = await Client.connect("poemsforaphrodite/keyword"); // Added new code

    const prediction = await app.predict("/predict", { // Added new code
      urls: urls.split('\n').join('\n'), // Ensure URLs are in the correct format
      pasted_content: "",
      keywords: keywords,
      keywords_file: null,
      model_type: "Multilingual",
    });

    console.log(prediction); // Added new code
    setResult(prediction);
  };

  return (
    <Container>
      <h1>Hello, Worldasasadsasdd!</h1>
      <div>
        <label>
          URLs (one per line):
          <textarea value={urls} onChange={(e) => setUrls(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Keywords:
          <input type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
        </label>
      </div>
      <button onClick={handleSubmit}>Submit</button> {/* Added button */}
      {result && (
        <div>
          <h2>Prediction Results</h2>
          <table>
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Relevance Score</th>
                <th>Content</th>
              </tr>
            </thead>
            <tbody>
              {result.data[0].data.map((row, index) => (
                <tr key={index}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>
                    <a href={row[2]} target="_blank" rel="noopener noreferrer">
                      {row[2]}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>CSV File</h3>
          <a href={result.data[1].url} download="relevance_scores.csv" target="_blank" rel="noopener noreferrer">
            Download CSV
          </a>
        </div>
      )}
    </Container>
  );
};