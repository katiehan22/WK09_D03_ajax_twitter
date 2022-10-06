import { API, broadcast } from "./util";
import { followUser, unfollowUser } from "./util/api";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton;
    this.handleClick = this.handleClick.bind(this);
    this.toggleButton.addEventListener("click", this.handleClick);
  }

  async handleClick(event) {
    // Your code here
    event.preventDefault();
    if (this.followState === "followed") {
      this.unfollow();
    } else {
      this.follow();
    }
  }

  async follow() {
    // Your code here
    this.followState = 'following';
    await followUser(this.toggleButton.dataset.userId);
    this.followState = 'followed';
    console.log(this.followState);
  }

  async unfollow() {
    // Your code here
    this.followState = 'unfollowing';
    await unfollowUser(this.toggleButton.dataset.userId);
    this.followState = 'unfollowed';
    console.log(this.followState);
  }

  render() {
    switch (this.followState) {
      // Your code here
      
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}