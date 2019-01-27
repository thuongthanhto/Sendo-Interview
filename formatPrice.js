// Câu 3.1.​ Cài đặt function sau để format giá tiền, sao cho hoạt động với đoạn code bên dưới.
// formatPrice​ ( ​ 1000​ )
// 1.000

// link about regular expression https://viblo.asia/p/bieu-thuc-chinh-quy-regex-trong-javascript-QpmleQ9mlrd

function formatPrice(number) {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

console.log(formatPrice(10000));
