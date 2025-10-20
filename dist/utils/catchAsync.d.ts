import type { NextFunction, Request, Response } from "express";
type Fn = (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const catchAsync: (fn: Fn) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};
//# sourceMappingURL=catchAsync.d.ts.map