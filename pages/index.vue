<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>
        ut.code(); 第96回五月祭企画 「あなたのためのプログラミング」
      </v-toolbar-title>
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
            v-for="key in 1"
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
            v-for="key in 1"
            :key="key"
            :src="'/carousel/' + key + '.jpg'"
            cover
          ></v-carousel-item>
        </v-carousel>
        <v-card class="my-2">
          <v-card-title>あなたのためのプログラミング</v-card-title>
          <v-card-text>
            <p>ut.code(); の第96回五月祭企画へようこそ！</p>
            <p>
              「あなたのためのプログラミング」は、皆さま全員に向けた企画です。<br />
              プログラマーの方も、プログラミングをやったことがないという方も、お楽しみいただけます。<br />
              お子さまも、親御さんも、学生さんも、社会人の方も、お楽しみいただけます。
            </p>
          </v-card-text>
          <v-card-title>日時</v-card-title>
          <v-card-text>
            <p>5/13 (土), 5/14 (日) 9:00 〜 18:00</p>
          </v-card-text>
          <v-card-title>場所</v-card-title>
          <v-card-text>
            <p>工学部 6 号館 2 階 63 号講義室</p>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title> はじめてのプログラミング教室 </v-card-title>
          <v-card-item>
            <v-container>
              <v-row>
                <v-col>
                  <v-img src="first-programming-class.jpg" max-width="50%">
                  </v-img>
                  <v-container>
                    <p>
                      「はじめてのプログラミング教室」はut.code();
                      がこれまでの学園祭でも提供してきた、自慢のコンテンツです。
                    </p>
                    <p>
                      ブロックを並べて、積み木感覚で、誰でも簡単にプログラミングに触れることができます。
                    </p>
                    <p>
                      でも最適化するとなると大人でも大変……。ぜひ挑戦していってください！
                    </p>
                  </v-container>
                </v-col>
              </v-row>
            </v-container>
            <v-btn block href="https://festival.utcode.net/" class="ma-2"
              >このコンテンツで遊ぶ</v-btn
            >
          </v-card-item>
        </v-card>
        <v-card>
          <v-card-title>
            ML Workshop in はじめてのプログラミング教室
          </v-card-title>
          <v-card-item>
            <v-img src="ml-workshop.jpg" max-width="50%"> </v-img>
            <v-btn
              href="https://festival.utcode.net/kmeans"
              class="ma-2"
              target="_blank"
              rel="noopener noreferrer"
              >K平均法</v-btn
            >
            <v-btn
              href="https://festival.utcode.net/genetic-algorithm"
              class="ma-2"
              target="_blank"
              rel="noopener noreferrer"
              >遺伝的アルゴリズム</v-btn
            >
            <v-btn
              href="https://festival.utcode.net/qlearning"
              class="ma-2"
              target="_blank"
              rel="noopener noreferrer"
              >Q学習</v-btn
            >
            <v-btn
              href="https://festival.utcode.net/gradient-descent"
              class="ma-2"
              target="_blank"
              rel="noopener noreferrer"
              >勾配降下法</v-btn
            >
          </v-card-item>
        </v-card>
        <v-card>
          <v-card-title> First Web Game Maker </v-card-title>
          <v-card-item>
            <v-img src="first-web-game-maker.jpg" max-width="50%"> </v-img>
          </v-card-item>
        </v-card>
        <v-card>
          <v-card-title> タイピングゲーム by ut.code(); </v-card-title>
          <v-card-item>
            <v-img src="typing-game.jpg" max-width="50%"> </v-img>
            <v-btn
              block
              href="https://typing.utcode.net"
              class="ma-2"
              target="_blank"
              rel="noopener noreferrer"
              >このコンテンツで遊ぶ</v-btn
            >
          </v-card-item>
        </v-card>
        <v-card>
          <v-card-title> PL Workshop </v-card-title>
          <v-card-item>
            <v-img src="pl-workshop.jpg" max-width="50%"> </v-img>
            <v-btn
              block
              href="https://pl-workshop.github.io/pl-workshop-text/"
              class="ma-2"
              target="_blank"
              rel="noopener noreferrer"
              >このコンテンツで遊ぶ</v-btn
            >
          </v-card-item>
        </v-card>

        <!-- <v-card>
          <v-card-title id="kampa" class="headline">
            カンパのお願い
            <v-spacer />
            <v-icon>mdi-cash</v-icon>
          </v-card-title>
          <v-card-text>
            <p>
              第73回駒場祭企画では、お貸しする用のPCのレンタル費・ポスターの印刷費など、費用がかかっております。<br />
              カンパと言う形で、ご参加いただいた皆さまから少しでも支援いただければ幸いです。
            </p>
            <p>よろしくお願いいたします。</p>
            <ul>
              <li>カンパするか否かと金額については任意です。</li>
              <li>
                カンパで集めた金銭は ut.code();
                が駒場祭をする上でかかった必要経費の補填に充てさせていただきます。
              </li>
            </ul>
            <external-button :url="paypayUrl"> PayPay </external-button>
            <p>PCからご覧の方は以下の二次元コードを読み取ってください。</p>
            <div justify="center" align="center" width="50%">
              <v-img width="50%" src="/paypay.svg" alt="PayPay二次元コード" />
            </div>
          </v-card-text>
        </v-card> -->
        <v-card class="my-2">
          <v-card-title id="contact" class="headline">
            お問い合わせ
          </v-card-title>
          <v-card-text>
            <p>
              問い合わせは contact〜utcode.net
              にメールをいただくか、以下のSNSからお願いいたします。<br />
              spam対策で@を〜に変更しています。
            </p>
            <p>
              なお ut.code();
              では、プログラミングを始めてみたい、新しいスキルを身につけたいという学生を常時募集しています！<br />
              ご興味をお持ちの方は、ぜひご連絡ください！
            </p>
            <v-btn url="https://twitter.com/utokyo_code">公式Twitter</v-btn>
            <v-btn url="https://line.me/ti/p/%40nlr3843e">公式LINE</v-btn>
            <zoom />
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
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
