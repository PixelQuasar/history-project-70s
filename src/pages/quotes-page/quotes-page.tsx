import {
  Quote,
  QuoteAuthor,
  QuoteContent,
  QuotePageWrapper,
  Title,
} from "./styles.ts";
import Navbar from "../../components/navbar";

export const QuotesPage = () => {
  return (
    <QuotePageWrapper>
      <Navbar />
      <Title>Рецензии на книги:</Title>
      <Quote>
        <QuoteContent>
          Ни та, ни другая, ни третья оценка неверны. Как истовых апологетов
          системы, так и борцов с ней в чистом виде было исчезающе мало,
          основную часть общности советских людей составляли те, кто верил в
          фундаментальные ценности социализма, хотя к возможности построения
          коммунизма на этом базисе относился скептически. Кто понимал что
          "условно сегодняшняя" система взаимоотношений серьезно отошла от
          заявленных идеалов, но не имел ресурсов и желания бороться, по мере
          возможностей приспосабливаясь. Почему не боролись, если видели, что
          все не так, как надо? Потому что живущим внутри системы она казалась
          незыблемой, а перспектива восстать на нее уровнем эффективности
          представлялась соотносимой с протестами против смены времен года или
          законов физики.
        </QuoteContent>
        <QuoteAuthor>Майя Ставитская, книжный обозреватель</QuoteAuthor>
      </Quote>
      <Quote>
        <QuoteContent>
          Понятие перформативности усложняет основную идею книги и делает ее,
          как мне кажется, непрозрачной. Основываясь на теории речевых актов Дж.
          Остина и разнообразных комментариях к этой теории (Деррида, Джудит
          Батлер, Фуко, Бурдье), Юрчак предлагает в качестве аналитического
          инструмента для препарирования позднесоветской реальности идею
          перформативного сдвига: советские люди участвовали в «воспроизводстве
          ритуализованных актов и высказываний» (например, ходили на
          демонстрацию или голосовать), но не умели или не хотели усваивать
          запечатленные в них идеи (констатирующую составляющую дискурса). В
          результате рождались новые смыслы и формы существования, которые
          государство «не предвидело и увидеть или осознать которые до конца не
          могло».
        </QuoteContent>
        <QuoteAuthor>Жанна Кормина. Рец. на кн.: Алексей Юрчак.</QuoteAuthor>
      </Quote>
      <Quote>
        <QuoteContent>
          Любопытное и знаковое, хотя и неоднозначное исследование. Весь анализ
          автора крутится вокруг понятий "перформативного сдвига" и
          "детерреториализации" (Гваттари), истолкованных на свой манер. Автор
          провел огромную работу - эта книга задумывалась еще в начале 90-х.
          Многие вещи очень точно схвачены, переработано большое количество
          документального материала, хотя можно отметить и некоторые натяжки. В
          общем, исследование крайне информативное, предоставляющее почву для
          размышлений.
        </QuoteContent>
        <QuoteAuthor>Трофимов Николая, книжный обозреватель</QuoteAuthor>
      </Quote>
    </QuotePageWrapper>
  );
};
