import { ls } from './lib/ls.js';
import express from 'express';


//const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    const { address } = req.query;
    console.log(address);
    const result = ls(address);
    
    res.json(result);
});

app.listen(3000);