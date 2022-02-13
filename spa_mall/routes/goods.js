const express = require('express');
const Goods = require('../schemas/goods');
const Cart = require('../schemas/cart');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('this is root page')
});

// 굿즈 목록 조회
router.get('/goods', async (req, res) => {
  const { category } = req.query;

  const goods = await Goods.find({ category });

  res.json({
    goods,
  });
});

// 장바구니 목록 조회
router.get('/goods/cart', async (req, res) => {
  const carts = await Cart.find();
  const goodsIds = carts.map((cart) => cart.goodsId);

  const good = await Goods.find({ goodsId: goodsIds });

  res.json({
    cart: carts.map((cart) => ({
      quantity: cart.quantity,
      goods: good.find((item) => item.goodsId === cart.goodsId),
    })),
  });
});

// 굿즈 상세 조회
router.get('/goods/:goodsId', async (req, res) => {
  const { goodsId } = req.params;

  const [goods] = await Goods.find({ goodsId: Number(goodsId) });

  res.json({
    goods,
  });
});

// 굿즈 장바구니에 넣기
router.post('/goods/:goodsId/cart', async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  const existscarts = await Cart.find({ goodsId: Number(goodsId) });
  if (existscarts.length) {
    return res.status(400).json({ success: false, errorMessage: '이미 장바구니에 들어있는 상품입니다.' });
  }

  await Cart.create({ goodsId: Number(goodsId), quantity });

  res.json({ seccess: true });

});

// 굿즈 장바구니에서 지우기
router.delete('/goods/:goodsId/cart', async (req, res) => {
  const { goodsId } = req.params;

  const existscarts = await Cart.find({ goodsId: Number(goodsId) });
  if (existscarts.length) {
    await Cart.deleteOne({ goodsId: Number(goodsId) });
  }

  res.json({ success: true })
});

// 굿즈 장바구니에서 수정하기
router.put('/goods/:goodsId/cart', async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  if (quantity < 1) {
    return res.status(400).json({errorMessage: '0개 이하로는 수정할 수 없습니다.'});
  }

  const existscarts = await Cart.find({ goodsId: Number(goodsId) });
  if (!existscarts.length) {
    await Cart.create({ goodsId: Number(goodsId), quantity });
  } else {
    await Cart.updateOne({ goodsId: Number(goodsId) }, { $set: { quantity } })
  }

  res.json({success: true})
})

// 굿즈 추가하기
router.post('/goods', async (req, res) => {
  const { goodsId, name, thumbnailUrl, category, price } = req.body;

  const goods = await Goods.find({ goodsId });

  if (goods.length) {
    return res.status(400).json({ success: false, errorMessage: '이미 있는 데이터 입니다.' });
  }

  const createGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });

  res.json({ goods: createGoods });
});

module.exports = router;