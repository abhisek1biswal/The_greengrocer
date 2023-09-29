import React from "react";
import Opinions from "../../components/Opinions/Opinions";

export default function SellerPage() {
  return (
    <div>
      <div className="h-[20rem]">
        <img
          className="w-full h-full relative"
          src="https://static.vecteezy.com/system/resources/previews/004/299/835/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
          alt=""
        />
        <button className="w-40 h-10 border absolute left-32 top-60 rounded-md bg-orange-600">
          Start Selling
        </button>
      </div>
      <div className="flex justify-evenly items-center">
        <Opinions
          link="https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-600x900.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "
          name="anonymous"
        />
        <Opinions
          link="https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-600x900.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "
          name="anonymous"
        />
        <Opinions
          link="https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-600x900.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "
          name="anonymous"
        />
      </div>
      <div className="mt-3">
        <h2 className="font-bold text-2xl mb-4">Why Sell online?</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
    </div>
  );
}
