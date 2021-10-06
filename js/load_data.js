const cors_api_host=  'cors-anywhere.herokuapp.com';
const api_shopee='https://shopee.vn/api/v4/search/search_items?by=relevancy&limit=60&match_id=11035567&newest=120&order=desc&page_type=search&scenario=PAGE_OTHERS&version=2';
var shopee = document.getElementById("shopee");
var cors_api_url = 'https://' + cors_api_host + '/' + api_shopee;
function get_url(shop_id,item_id){
	var domain = 'https://shopee.vn/'
	var url = domain +'minha-i.'+ shop_id + '.' + item_id;
	return url
}
// console.log(cors_api_url)
fetch(cors_api_url)
.then(res=> res.json())
.then((res)=>{
		htmls = ''
		console.log(res['items'])
		for (var i = 0; i < 30; i++) {
			var image = 'https://cf.shopee.vn/file/'+ res['items'][i]['item_basic']['image'];
			var name = res['items'][i]['item_basic']['name'];
			var price = res['items'][i]['item_basic']['price']/100000;
			var price_before_discount = res['items'][i]['item_basic']['price_before_discount']/100000 ;
			var url = get_url(res['items'][i]['shopid'],res['items'][i]['itemid'])
			// console.log(url)
			var html = `<div class="col-md-3 col-sm-6 col-xs-12 text-center sm-margin-nine-bottom xs-margin-fifteen-bottom">
                        <div class="margin-ten-bottom"><a href="${url}" target="_blank"><img alt="" src="${image}" data-img-size="(W)800px X (H)800px"></a></div>
                        <h3 class="text-medium line-height-18 alt-font display-block tz-text"><a href="https://goeco.mobi/dGo3bOUI" target="_blank" class="text-dark-gray">Áo sơ mi nam ngắn tay vải lụa - ZUMAN - ASM11 </a></h3>
                        <div class="text-medium-gray text-medium margin-three-bottom tz-text"></div>
                        <div class="text-large alt-font font-weight-600 text-dark-gray tz-text margin-ten-bottom">${price} VNĐ&nbsp;&nbsp;&nbsp;<del>${price_before_discount} VNĐ</del></div>
                        <a class="btn-medium btn-circle btn border-2-dark-aqua btn-border text-dark-aqua propClone" href="${url}" target="_blank"><span class="tz-text">MUA NGAY</span><i class="fa fa-angle-right icon-extra-small tz-icon-color"></i></a>
                    </div>` 
            htmls +=html
		}
		shopee.innerHTML = htmls;
		// console.log(htmls)

})


// fetch("https://cors-anywhere.herokuapp.com/https://shopee.vn/api/v4/homepage/mall_shops?limit=23")
// .then(res => res.json())
// .then(res => console.log(res));