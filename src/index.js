import { print } from './print';

print('app loaded');

setTimeout(async () => {
  const { default: Calculator } =  await import('./calculator');

  const calc = new Calculator();
  print('Difference of 7 & 2 is', 7, 2);
  alert(calc.difference(7, 2));
}, 300);
