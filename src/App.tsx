import { useState } from 'react';
import '@/App.scss';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Typography from '@/components/Typography';
import { buttonActions } from '@/constants/button';
import { Message } from '@/components/Message';

function App() {
  const [chat] = useState(false);

  return (
    <div className="chat">
      {chat ? (
        <div className="chat__content">
          <Message
            className="chat__question"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, cupiditate adipisci quia fugiat quam repellendus perspiciatis vero sunt earum, atque, accusantium labore quis. Quis praesentium quos cumque perferendis ipsam mollitia?
Nesciunt, minima, excepturi apsamus iure autem nesciunt officia eum in nulla assumenda sequi delectus temporibus alias porro, soluta magni nemo quia esse rem inventore aut? Sint.
Autem, quasi. Quis at itaque quaerat illo suscipit adipisci cum odit? Veniam, tempore tempora ipsam dignissimos omnis nesciunt eveniet nam reprehenderit cumque sit debitis neque a commodi obcaecati. Dolores, ea.
Ipsum dolorem ipsam fuga neque consequuntur temporibus architecto numquam impedit facilis consectetur quod quibusdam praesentium aspernatur earum sint totam unde recusandae, debitis vero et iure! Eligendi ad debitis eaque fugiat."
          />
          <div className="chat__answear">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque, error
              porro exercitationem qui rem? Corporis natus soluta, perspiciatis fugiat minima
              molestias ipsum, ducimus optio nostrum, nulla rerum. Quaerat, iure? Ipsam optio
              necessitatibus eum temporibus, cumque aspernatur nihil repellat ducimus fugit. Sunt
              molestiae dolore accusantium magni quae ex. Facilis soluta dolores ipsa consequuntur
              itaque culpa assumenda provident error commodi. Id. Saepe sapiente aspernatur, alias
              et consectetur molestias maxime doloribus exercitationem veritatis repellat iusto
              voluptate libero, aliquam eius distinctio dolorum fugit quasi accusantium deserunt
              placeat illum vitae. Modi quas delectus saepe! Reprehenderit nemo, placeat recusandae
              sunt amet laborum! Aperiam quis corrupti esse eaque corporis. Qui, enim laboriosam!
              Error delectus ipsa modi inventore doloribus eaque eum, perferendis eos in dolorum
              commodi! Quos. Sequi omnis nostrum, accusantium magni sapiente voluptates cumque
              incidunt corrupti ad temporibus perferendis placeat in. Ad reiciendis molestias
              exercitationem doloremque, doloribus perferendis repellat saepe aperiam impedit,
              deserunt incidunt? Hic, aperiam. Voluptatem ea ipsa assumenda quo similique corporis
              ad asperiores impedit, commodi, porro nihil possimus magni dolore? Ipsam, quae. Quas
              ea nostrum dolorum corrupti sint! Omnis est illo repudiandae similique saepe. Quod
              culpa, magnam deleniti blanditiis quas dolores adipisci voluptas laboriosam! Ducimus
              inventore facilis consectetur ut nostrum, dolorum error facere quidem sed totam? Ipsam
              numquam possimus enim cumque consectetur quos vel. Molestiae amet repudiandae non,
              libero eius exercitationem illo consectetur voluptate doloribus necessitatibus aperiam
              atque expedita rem natus nihil numquam consequuntur unde neque! Minus repellendus
              exercitationem alias fugiat eaque qui ut! Tenetur, sed praesentium quam natus eligendi
              nihil nemo quo, maiores reprehenderit at eveniet ad omnis hic ipsa quaerat molestias
              accusamus maxime consectetur nesciunt. Velit, consequuntur possimus qui nulla fugit
              nam! Necessitatibus saepe dicta a mollitia labore? Quaerat ad perferendis iste!
              Reprehenderit alias atque corrupti est. Debitis et totam necessitatibus perferendis,
              facilis aliquam eveniet dolore ipsum at provident voluptas reiciendis vero.
            </Typography>
          </div>
        </div>
      ) : (
        <div className="chat__title">
          <Typography size={30} weight={500}>
            How can i help you?
          </Typography>
        </div>
      )}
      <div className="chat__menu">
        <Input />
        <div className="chat__buttons">
          {buttonActions.map((item, index) => (
            <Button key={index} icon={item.icon}>
              {item.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
