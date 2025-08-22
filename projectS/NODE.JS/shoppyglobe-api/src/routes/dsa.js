import { Router } from 'express';
import { body, validationResult } from 'express-validator';
const router = Router();
const validate = (rules) => [ ...rules, (req,res,next)=>{ const e=validationResult(req); if(!e.isEmpty()) return res.status(400).json({error:'Validation error', issues:e.array()}); next(); }];
router.post('/linear-search', validate([ body('array').isArray({min:1}).custom(a=>a.every(n=>Number.isFinite(n))), body('target').isNumeric() ]), (req,res)=>{ const {array,target}=req.body; let index=-1; for(let i=0;i<array.length;i++){ if(array[i]===Number(target)){ index=i; break; } } return res.status(200).json({ index }); });
router.post('/bubble-sort', validate([ body('array').isArray({min:1}).custom(a=>a.every(n=>Number.isFinite(n))) ]), (req,res)=>{ const arr=[...req.body.array]; for(let i=0;i<arr.length-1;i++){ for(let j=0;j<arr.length-i-1;j++){ if(arr[j]>arr[j+1]){ [arr[j],arr[j+1]]=[arr[j+1],arr[j]]; } } } return res.status(200).json({ sorted: arr }); });
export default router;
