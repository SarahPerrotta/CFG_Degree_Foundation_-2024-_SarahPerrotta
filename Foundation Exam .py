def no_of_handshakes(no_people):

  # This function calculates the number of handshakes in a group of people.
  # no_people: An integer representing the number of people in the group.
  # Returns:An integer representing the number of handshakes.
  # Raises ValueError: If the number of people is less than 1.

  if no_people < 1:
    raise ValueError("The number of people must be greater than or equal to 1")

  if no_people == 1:
    return 0  # There will be no handshakes for 1 person
  else:
    # Recursive case: Each person shakes hands with n-1 others
    return no_people * (no_people - 1) // 2

# Test function
def test_handshakes():
  # expected results
  test_data = [
      (1, 0),
      (2, 1),
      (3, 3),
      (5, 10),
      (10, 45),
  ]
  for people, expected_shakes in test_data:
    try:
      result = no_of_handshakes(people)
      assert result == expected_shakes, f"Failed for {people} people. Expected {expected_shakes}, got {result}"
    except ValueError as e:
      print(f"Error: {e}")

# Run the tests
test_handshakes()
print("All tests passed!")

