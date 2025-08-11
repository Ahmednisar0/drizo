import { Suspense } from 'react';
import ShopLoading from './loading';
import Shop from './shop';

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopLoading />}>
      <Shop />
    </Suspense>
  );
}