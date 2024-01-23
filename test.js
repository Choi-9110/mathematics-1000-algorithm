async function main() {

    
    const array = [
        { "NO_REQ": "1235", "GOODS_PRICE": "4500" },
        { "NO_REQ": "1232", "GOODS_PRICE": "5500" },
        { "NO_REQ": "2235", "GOODS_PRICE": "11200" },
        { "NO_REQ": "1245", "GOODS_PRICE": "3900" },
        { "NO_REQ": "1215", "GOODS_PRICE": "4600" },
        { "NO_REQ": "1255", "GOODS_PRICE": "4900" },
        { "NO_REQ": "2235", "GOODS_PRICE": "6500" },
        
        { "NO_REQ": "2235", "GOODS_PRICE": "22500" }
      ];
      
// 목표 가격
const targetPrice = 10000;

// GOODS_PRICE가 targetPrice보다 작은 것을 배열에서 제거
const filteredArray = array.filter(item => parseInt(item.GOODS_PRICE) < targetPrice);
const filteredPull = array.filter(item => parseInt(item.GOODS_PRICE) > targetPrice);

// GOODS_PRICE를 기준으로 오름차순으로 정렬
const sortedArray = filteredArray.sort((a, b) => parseInt(a.GOODS_PRICE) - parseInt(b.GOODS_PRICE));
const sortedArrayPull = filteredPull.sort((a, b) => parseInt(a.GOODS_PRICE) - parseInt(b.GOODS_PRICE));

console.log(sortedArray);
console.log(filteredPull);

const combinedArray = sortedArrayPull.concat(sortedArray);

console.log(combinedArray);


// GOODS_PRICE가 targetPrice보다 작은 항목 제거
        //const filteredArray111= array.filter(item => parseInt(item.GOODS_PRICE) >= targetPrice);

      
//       // 배열을 GOODS_PRICE와 목표 가격 간의 절대 차이에 따라 정렬
//       array.sort((a, b) => {
//         const diffA = Math.abs(a.GOODS_PRICE - targetPrice);
//         const diffB = Math.abs(b.GOODS_PRICE - targetPrice);
      
//         if (diffA === diffB) {
//           // 차이가 같으면 기존 순서 유지
//           return 0;
//         } else {
//           // 차이가 다르면 오름차순으로 정렬
//           return diffA - diffB;
//         }
//       });

      
// // 필터링된 배열 출력
// console.log("필터링된 배열:", array);

      
//       // 목표 가격보다 작은 GOODS_PRICE를 가진 항목을 배열의 맨 뒤로 보냄
//       const filteredArray = array.reduce((acc, item) => {
//         if (item.GOODS_PRICE < targetPrice) {
//           acc.push(item);
//         } else {
//           acc.unshift(item);
//         }
//         return acc;
//       }, []);
      
//       // 정렬 및 필터링된 배열 출력
//       //console.log("정렬 및 필터링된 배열:", filteredArray);


}


main();


