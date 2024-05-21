#!/bin/bash

filename="your_known_file.txt"  # Replace with your actual filename
message_type="time"             # Choose "time" or "counter"

# Check if Git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  echo "Error: Not a Git repository."
  exit 1
fi

# Check if file exists
if [ ! -f "$filename" ]; then
  echo "Error: File '$filename' not found."
  exit 1
fi

# Generate commit message
if [ "$message_type" == "time" ]; then
  commit_message="Update $(date +'%Y-%m-%dT%H:%M:%S')" 
elif [ "$message_type" == "counter" ]; then
  counter_file=".commit_counter"
  if [ ! -f "$counter_file" ]; then
    echo "0" > "$counter_file"
  fi
  counter=$(cat "$counter_file")
  commit_message="Update #$counter"
  echo $((counter + 1)) > "$counter_file"
else
  echo "Invalid message type. Choose 'time' or 'counter'."
  exit 1
fi

# Add commit message to file
echo "$commit_message" >> "$filename"

# Add and commit
git add "$filename"
git commit -m "$commit_message"

# Get current branch and push
current_branch=$(git rev-parse --abbrev-ref HEAD)
git push origin "$current_branch"

echo "Successfully committed and pushed changes to '$filename' with message '$commit_message' on branch '$current_branch'."