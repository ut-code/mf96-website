<template>
  <Head>
    <Title> あなたのためのプログラミング - ut.code(); 第96回五月祭企画 </Title>
  </Head>
  <v-app>
    <v-app-bar color="grey-lighten-3">
      <v-toolbar-title
        ><span>あなたのためのプログラミング</span
        ><span class="d-none d-md-flex">
          - ut.code(); 第96回五月祭企画</span
        ></v-toolbar-title
      >
      <v-btn
        prepend-icon="mdi-web"
        href="https://utcode.net"
        target="_blank"
        rel="noopener noreferrer"
        class="d-none d-sm-flex"
      >
        <p style="text-transform: none">団体Webサイト</p>
      </v-btn>
      <v-btn
        icon
        href="https://utcode.net"
        target="_blank"
        rel="noopener noreferrer"
        class="d-sm-none"
      >
        <v-icon>mdi-web</v-icon>
      </v-btn>
      <v-btn
        prepend-icon="mdi-vote"
        href="https://gogatsusai.jp/96/visitor/kikaku/476/"
        target="_blank"
        rel="noopener noreferrer"
        class="d-none d-sm-flex"
      >
        <p style="text-transform: none">投票する</p>
      </v-btn>
      <v-btn
        icon
        href="https://gogatsusai.jp/96/visitor/kikaku/476/"
        target="_blank"
        rel="noopener noreferrer"
        class="d-sm-none"
      >
        <v-icon>mdi-vote</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container class="pa-2">
        <v-carousel
          :show-arrows="false"
          class="my-2 d-none d-sm-block"
          height="50vh"
          cycle
        >
          <v-carousel-item
            v-for="key in 6"
            :key="key"
            :src="'/carousel/' + key + '.jpg'"
            cover
          ></v-carousel-item>
        </v-carousel>
        <v-carousel
          :show-arrows="false"
          class="my-2 d-sm-none"
          height="30vh"
          cycle
        >
          <v-carousel-item
            v-for="key in 6"
            :key="key"
            :src="'/carousel/' + key + '.jpg'"
            cover
          ></v-carousel-item>
        </v-carousel>
        <v-card>
          <v-row>
            <v-col cols="12" md="6">
              <v-container>
                <p>ut.code(); の第 96 回五月祭企画へようこそ！</p>
                <p>
                  「あなたのためのプログラミング」は、皆さま全員に向けた企画です。<br />
                  プログラマーの方も、プログラミングをやったことがないという方も、お楽しみいただけます。<br />
                  お子さまも、親御さんも、学生さんも、社会人の方も、お楽しみいただけます。
                </p>
              </v-container>
            </v-col>
            <v-col cols="12" md="6">
              <v-container>
                <v-card-title>日時</v-card-title>
                <v-alert> 5/13 (土), 5/14 (日) 9:00 〜 18:00 </v-alert>
                <v-card-title>場所</v-card-title>
                <v-alert> 工学部 6 号館 2 階 63 号講義室 </v-alert>
              </v-container>
            </v-col>
          </v-row>
          <!-- </v-container> -->
        </v-card>
        <v-card>
          <v-sheet color="grey-lighten-3">
            <v-card-title> はじめてのプログラミング教室 </v-card-title>
          </v-sheet>
          <v-card-item>
            <!-- <v-container> -->
            <v-row>
              <v-col cols="12" md="6">
                <v-img src="first-programming-class.jpg"> </v-img>
              </v-col>
              <v-col cols="12" md="6">
                <v-container>
                  <p>
                    「はじめてのプログラミング教室」は ut.code();
                    がこれまでの学園祭でも提供してきた、自慢のコンテンツです。
                  </p>
                  <p>
                    ブロックを並べて、積み木感覚で、誰でも簡単にプログラミングに触れることができます。
                  </p>
                  <p>
                    でも最適化するとなると大人でも大変……。ぜひ挑戦していってください！
                  </p>
                </v-container>
                <v-btn
                  block
                  href="https://festival.utcode.net/"
                  class="ma-2 align-self-end"
                  color="grey-lighten-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  >このコンテンツで遊ぶ</v-btn
                >
              </v-col>
            </v-row>
            <!-- </v-container> -->
          </v-card-item>
        </v-card>
        <v-card>
          <v-sheet color="grey-lighten-3">
            <v-card-title>
              ML Workshop in はじめてのプログラミング教室
            </v-card-title>
          </v-sheet>
          <v-card-item>
            <v-row>
              <v-col cols="12" md="6">
                <v-img src="ml-workshop.jpg"> </v-img>
              </v-col>
              <v-col cols="12" md="6">
                <v-container>
                  <p>
                    「はじめてのプログラミング教室」に ML (Machine Learning:
                    機械学習) 編が登場！
                  </p>
                  <p>
                    プログラミング言語は用いず、マウスでブロックを組み合わせていくだけで機械学習のアルゴリズムを実装することができます。
                  </p>
                  <p>
                    どの項目でも、自分が組んだアルゴリズムの動きがアニメーションで可視化されるようになっており、楽しく視覚的に機械学習の仕組みを理解することができます。
                  </p>
                </v-container>
                <v-row justify="center" class="my-2">
                  <v-btn
                    href="https://festival.utcode.net/kmeans"
                    class="ma-2"
                    color="grey-lighten-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    >K平均法</v-btn
                  >
                  <v-btn
                    href="https://festival.utcode.net/genetic-algorithm"
                    class="ma-2"
                    color="grey-lighten-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    >遺伝的アルゴリズム</v-btn
                  >
                  <v-btn
                    href="https://festival.utcode.net/qlearning"
                    class="ma-2"
                    color="grey-lighten-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Q学習</v-btn
                  >
                  <v-btn
                    href="https://festival.utcode.net/gradient-descent"
                    class="ma-2"
                    color="grey-lighten-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    >勾配降下法</v-btn
                  >
                </v-row>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
        <v-card>
          <v-sheet color="grey-lighten-3">
            <v-card-title> First Web Game Maker </v-card-title>
          </v-sheet>
          <v-card-item>
            <v-row>
              <v-col cols="12" md="6">
                <v-img src="first-web-game-maker.jpg"> </v-img>
              </v-col>
              <v-col cols="12" md="6">
                <v-container>
                  <p>
                    First Web Game Maker
                    は、ボタンを押すだけでプログラミング言語を記述し、ウェブ上で動くゲームを制作できるツールです。
                  </p>
                  <p>
                    このツールを用いて、自分だけのゲームを制作してみませんか？
                  </p>
                  <p>
                    First Web Game Maker
                    では、ボタンを押すと実際にテキストエディタ上に HTML / CSS /
                    JavaScript といった言語が記述されます。
                  </p>
                  <p>
                    そのため、ゲームを制作する過程で具体的なコードとその意味との対応を学ぶことができるうえ、テキストエディタを用いた本格的な開発への移行も容易です。
                  </p>
                  <v-container>
                    <v-alert
                      >このコンテンツは、会場の端末の Visual Studio Code
                      から体験することができます。</v-alert
                    >
                  </v-container>
                </v-container>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
        <v-card>
          <v-sheet color="grey-lighten-3">
            <v-card-title> タイピングゲーム by ut.code(); </v-card-title>
          </v-sheet>
          <v-card-item>
            <v-row>
              <v-col cols="12" md="6">
                <v-img src="typing-game.jpg"> </v-img>
              </v-col>
              <v-col cols="12" md="6">
                <v-container>
                  <p>
                    タイピングは、プログラマーはもちろん、多くの大学生にとって必須のスキルです。
                  </p>
                  <p>
                    友達と遊びながら鍛えたい、そう思ったメンバーがゲームを作っちゃいました！
                  </p>
                  <p>さらに、キーボード配列をカスタマイズすることも可能！</p>
                  <p>親子・友達同士で対戦してみませんか？</p>
                  <p>東大生に挑戦していきませんか？</p>
                </v-container>
                <v-btn
                  block
                  href="https://typing.utcode.net"
                  class="ma-2"
                  color="grey-lighten-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  >このコンテンツで遊ぶ</v-btn
                >
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
        <v-card>
          <v-sheet color="grey-lighten-3">
            <v-card-title> PL Workshop </v-card-title>
          </v-sheet>
          <v-card-item>
            <v-row>
              <v-col cols="12" md="6">
                <v-img src="pl-workshop.jpg"> </v-img>
              </v-col>
              <v-col cols="12" md="6">
                <v-container>
                  <p>
                    プログラミングをやったことがある人でも、プログラミング言語を作ったことがある人は少ないのではないでしょうか？
                  </p>
                  <p>
                    JavaScript のライブラリ、PEG.js
                    を使って四則演算や変数、条件分岐、関数が使える簡単なプログラミング言語を作ってみましょう！
                  </p>
                </v-container>
                <v-btn
                  block
                  href="https://pl-workshop.github.io/pl-workshop-text/"
                  class="ma-2"
                  color="grey-lighten-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  >このコンテンツで遊ぶ</v-btn
                >
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
        <v-card>
          <v-sheet color="grey-lighten-3">
            <v-card-title> cobuilder </v-card-title>
          </v-sheet>
          <v-card-item>
            <v-row>
              <v-col cols="12" md="6">
                <v-img src="cobuilder.png"> </v-img>
              </v-col>
              <v-col cols="12" md="6">
                <v-container>
                  <p>最近巷でメタバースなるものが話題になっています。</p>
                  <p>
                    「メタバース内ではあたかも現実世界と同じようなリアリティがある」というのがうたい文句になっています。
                  </p>
                  <p>
                    しかし、仮想空間の本来の良さとは非現実であるからこそできることがあることではないでしょうか。
                  </p>
                  <p>
                    cobuilder
                    空間では、参加者全員で空間を作り上げます。草木を生み出し、豪邸を立て、地形すら変えて現実世界ではありえない理想の世界を作り上げます。
                  </p>
                </v-container>
                <v-btn
                  block
                  href="https://cobuilder.pages.dev/"
                  class="ma-2"
                  color="grey-lighten-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  >このコンテンツで遊ぶ</v-btn
                >
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
        <!-- <v-card>
          <v-card-title id="kampa"> カンパのお願い </v-card-title>
          <v-card-text>
            <p>
              第 96
              回五月祭企画では、お貸しする用のPCのレンタル費・ビラやポスターの印刷費など、費用がかかっております。<br />
              カンパという形で、ご参加いただいた皆さまから少しでも支援いただければ幸いです。
              よろしくお願いいたします。
            </p>
            <p>※カンパするか否かと金額については任意です。</p>
            <p>
              ※カンパで集めた金銭は ut.code();
              が五月祭企画を実行する上でかかった必要経費の補填に充てさせていただきます。
            </p>
            <v-btn class="ma-2" href="" size="large"> PayPay </v-btn>
            <p>PCからご覧の方は以下の二次元コードを読み取ってください。</p>
            <div justify="center" align="center" width="50%">
              <v-img width="50%" src="/paypay.svg" alt="PayPay二次元コード" />
            </div>
          </v-card-text>
        </v-card> -->
        <v-card>
          <v-card-title id="contact"> お問い合わせ </v-card-title>
          <v-card-item>
            <p>
              問い合わせは contact〜utcode.net にメールをいただくか、以下の SNS
              からお願いいたします。<br />
              spam 対策で @ を 〜 に変更しています。
            </p>
            <p>
              なお ut.code();
              では、プログラミングを始めてみたい、新しいスキルを身につけたいという学生を常時募集しています！<br />
              ご興味をお持ちの方は、ぜひご連絡ください！
            </p>
            <v-row justify="center" class="ma-2">
              <v-btn
                href="https://twitter.com/utokyo_code"
                class="mx-2"
                color="grey-lighten-3"
                target="_blank"
                rel="noopener noreferrer"
                >公式Twitter</v-btn
              >
              <v-btn
                href="https://line.me/ti/p/%40nlr3843e"
                class="mx-2"
                color="grey-lighten-3"
                target="_blank"
                rel="noopener noreferrer"
                >公式LINE</v-btn
              >
            </v-row>
          </v-card-item>
        </v-card>
      </v-container>
      <v-footer>
        <v-row justify="center">
          <div class="my-1">&copy; 2023 ut.code();</div>
        </v-row>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import "@mdi/font/css/materialdesignicons.css";
// const items = [
//   {
//     src: "~/assets/images/1.jpg",
//   },
//   {
//     src: "/carousel/activity-learn-utcode-learn.jpg",
//   },
//   {
//     src: "/assets/carousel/activity-learn.jpg",
//   },
//   {
//     src: "/assets/carousel/activity-share.jpg",
//   },
// ];
</script>
<style>
.v-toolbar-title {
  font-size: 1.1rem;
}
.v-toolbar-title__placeholder {
  display: flex;
}
.v-card {
  margin: 2rem 0;
}
.v-col {
  padding: 0px;
}
</style>
