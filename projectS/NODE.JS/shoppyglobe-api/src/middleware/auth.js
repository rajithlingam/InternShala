import jwt from 'jsonwebtoken';
export function signToken(p){return jwt.sign(p, process.env.JWT_SECRET, {expiresIn:'1d'});}
export function requireAuth(req,res,next){const a=req.headers.authorization||'';const t=a.startsWith('Bearer ')?a.slice(7):null;if(!t)return res.status(401).json({error:'Missing Bearer token'});try{req.user=jwt.verify(t, process.env.JWT_SECRET);next();}catch(e){return res.status(401).json({error:'Invalid or expired token'});}}
