import random
import os
import json

HS_FILE = "highscore.txt"
LEADERBOARD_FILE = "leaderboard.json"

def load_high_score():
    """Return the best (lowest) score stored in HS_FILE or None if unavailable."""
    try:
        with open(HS_FILE) as f:
            return int(f.read().strip())
    except Exception:
        return None

def save_high_score(score):
    with open(HS_FILE, "w") as f:
        f.write(str(score))

def load_leaderboard():
    """Return list of {'name':str,'score':int} sorted by score."""
    try:
        with open(LEADERBOARD_FILE) as f:
            data = json.load(f)
            return sorted(data, key=lambda x: x["score"])
    except Exception:
        return []

def save_leaderboard(lb):
    with open(LEADERBOARD_FILE, "w") as f:
        json.dump(lb, f, indent=2)

def update_leaderboard(name, score):
    """Refactored logic: Adds score, sorts, and keeps Top 10."""
    lb = load_leaderboard()
    lb.append({"name": name, "score": score})
    lb = sorted(lb, key=lambda x: x["score"])[:10]
    save_leaderboard(lb)
    return lb

def display_leaderboard(lb):
    if not lb:
        print("(no entries yet)")
        return
    print("\n🏅 Leaderboard (best scores)")
    for idx, entry in enumerate(lb, start=1):
        print(f" {idx}. {entry['name']} - {entry['score']} attempts")

def number_guessing_game():
    print("\n🎮 Welcome to the Number Guessing Game!")
    player = input("What's your name? ").strip() or "Anonymous"
    
    # Difficulty Selection
    print("\nSelect Difficulty:")
    print("1. Easy   (1-50,  15 tries)")
    print("2. Medium (1-100, 10 tries)")
    print("3. Hard   (1-500, 7 tries)")
    choice = input("Enter 1, 2, or 3: ")

    if choice == "1":
        limit, max_tries = 50, 15
    elif choice == "3":
        limit, max_tries = 500, 7
    else:
        limit, max_tries = 100, 10

    secret_number = random.randint(1, limit)
    attempts = 0
    high_score = load_high_score()
    
    if high_score:
        print(f"\nAll-time high score to beat: {high_score}")

    print(f"I'm thinking of a number between 1 and {limit}. You have {max_tries} tries!")

    while attempts < max_tries:
        try:
            guess = int(input(f"Attempt {attempts + 1}/{max_tries}: "))
            attempts += 1

            if guess < 1 or guess > limit:
                print(f"Please stay between 1 and {limit}.")
                continue

            if guess < secret_number:
                print("Too low! ↓")
            elif guess > secret_number:
                print("Too high! ↑")
            else:
                print(f"✨ Congratulations {player}! You won in {attempts} attempts.")
                
                # Update High Score
                if high_score is None or attempts < high_score:
                    print("🔥 That's a new All-Time High Score!")
                    save_high_score(attempts)
                
                # Update Leaderboard
                new_lb = update_leaderboard(player, attempts)
                display_leaderboard(new_lb)
                return # Exit the function since they won

        except ValueError:
            print("Please enter a valid number.")

    # If the loop finishes without a 'return', the player lost
    print(f"\n💀 Game Over! You've used all {max_tries} attempts.")
    print(f"The correct number was: {secret_number}")

def main():
    while True:
        number_guessing_game()
        again = input("\nPlay again? (y/N): ").strip().lower()
        if again != "y":
            print("Thanks for playing – goodbye!")
            break

if __name__ == "__main__":
    main()