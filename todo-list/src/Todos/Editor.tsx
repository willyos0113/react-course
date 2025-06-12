import { FC } from "react";

export const Editor: FC = () => {
  return (
    <div>
      <div className="field">
        <div className="control">
          <input type="text" className="input" placeholder="title" />
        </div>
      </div>
      <div className="columns is-vcentered">
        <div className="column">
          <div className="field">
            <div className="control">
              <label className="radio">
                <input type="radio" />
                High
              </label>
              <label className="radio">
                <input type="radio" />
                Medium
              </label>
              <label className="radio">
                <input type="radio" />
                Low
              </label>
            </div>
          </div>
        </div>
        <div className="column has-text-right">
          <div className="field">
            <div className="control">
              <div className="select">
                <select>
                  <option>assign to</option>
                  <option>Alex</option>
                  <option>Bob</option>
                  <option>Chris</option>
                  <option>David</option>
                  <option>Ed</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea name="textarea" placeholder="content"></textarea>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input type="checkbox" />
            Resolved
          </label>
        </div>
      </div>
    </div>
  );
};
