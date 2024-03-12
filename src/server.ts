import express, { Express, json } from "express";
import cors from "cors";
import morgan from "morgan";
import { Request, Response } from "express";

const app: Express = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(json());
app.use(morgan("dev"));

// Sample data for options
// const optionsData = {
//   a: ['c', 'd', 'e'],
//   b: ['f', 'g', 'h'],
//   c: ['1', '2', '3'],
//   d: ['4', '5', '6'],
//   e: ['7', '8', '9'],
//   f: ['10', '11', '12'],
//   g: ['13', '14', '15'],
//   h: ['16', '17', '18'],
// };


interface OptionsData {
  [key: string]: string[];
}

const optionsData: OptionsData = {
  a: ['c', 'd', 'e'],
  b: ['f', 'g', 'h'],
  c: ['1', '2', '3'],
  d: ['4', '5', '6'],
  e: ['7', '8', '9'],
  f: ['10', '11', '12'],
  g: ['13', '14', '15'],
  h: ['16', '17', '18'],
};

app.get('/api/options/:option1', (req: Request, res: Response) => {
  const option1 = req.params.option1 as string; // Assuming option1 should always be a string

  if (option1 in optionsData) {
    const options = optionsData[option1] as string[];
    res.json(options.map((value) => ({ value, text: value.toUpperCase() })));
  } else {
    res.status(404).json({ error: 'Option not found' });
  }
});

app.get('/api/options/:option2', (req: Request, res: Response) => {
  const option2 = req.params.option2 as string; // Assuming option2 should always be a string

  if (option2 in optionsData) {
    const options = optionsData[option2] as string[];
    res.json(options.map((value) => ({ value, text: value.toUpperCase() })));
  } else {
    res.status(404).json({ error: 'Option not found' });
  }
});


// ROUTES
app.use("/api/auth", require("./routes/authRoutes"));

const PORT = 8080;
app.listen(PORT, () =>
  console.log(`Server is live on: http://localhost:${PORT}/`)
);
