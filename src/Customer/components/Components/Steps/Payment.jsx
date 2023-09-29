import React from "react";

export default function Payment() {
  return (
    <div class="leading-loose ml-10">
  <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
    <p class="text-gray-800 font-medium">Customer information</p>
    <div class="">
      <label class="block text-sm text-gray-00" for="cus_name">Card Holder Name</label>
      <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Holder Name" aria-label="Name"/>
    </div>
    <div class="mt-2">
      <label class="block text-sm text-gray-600" for="cus_email">Card No.</label>
      <input class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Card No." aria-label="Email"/>
    </div>
    
    <div class="inline-block mt-2 w-1/2 pr-1">
      <label class="hidden block text-sm text-gray-600" for="cus_email">MM/YY</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="MM/YY" aria-label="Email"/>
    </div>
    <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
      <label class="hidden block text-sm text-gray-600" for="cus_email">CVV</label>
      <input class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" required="" placeholder="CVV" aria-label="Email"/>
    </div>
    
  </form>
</div>
  );
}
