const loading = ['|','/','-','\\','|','/','-','\\','|'];

loading.forEach((x,i) => setTimeout(() => {
  process.stdout.write(`\r${x}   `);
},(i * 200) + 100));

