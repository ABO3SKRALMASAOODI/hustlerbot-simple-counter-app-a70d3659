import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-slate-700 border-slate-600 shadow-2xl">
        <div className="text-center space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Counter</h1>
            <p className="text-slate-300">Click the buttons to change the count</p>
          </div>

          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1">
              <div className="bg-slate-700 rounded-xl p-8">
                <motion.div
                  key={count}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                >
                  {count}
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="flex gap-3">
            <Button
              onClick={decrement}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-6 text-lg"
            >
              Decrease
            </Button>
            <Button
              onClick={reset}
              className="flex-1 bg-slate-600 hover:bg-slate-500 text-white font-semibold py-6 text-lg"
            >
              Reset
            </Button>
            <Button
              onClick={increment}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-6 text-lg"
            >
              Increase
            </Button>
          </div>

          <div className="pt-4 border-t border-slate-600">
            <p className="text-slate-400 text-sm">
              Current count: <span className="font-semibold text-white">{count}</span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
