// import express, { Request, Response } from 'express';

// const app = express();
// const port = 8080;

// // Sample data for options
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

// app.use(express.json());

// app.get('/api/options/:option1', (req: Request, res: Response) => {
//     const { option1 } = req.params;
//     const options = (optionsData[option1] || []) as string[];
//     res.json(options.map((value) => ({ value, text: value.toUpperCase() })));
// });

// app.get('/api/options/:option2', (req: Request, res: Response) => {
//     const { option2 } = req.params;
//     const options = (optionsData[option2] || []) as string[];
//     res.json(options.map((value) => ({ value, text: value.toUpperCase() })));
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
