class Solution(object):
    def findJudge(self, N, trust):
        """
        :type N: int
        :type trust: List[List[int]]
        :rtype: int
        """
        p_list = [0] * N
        for [a, b] in trust:
            p_list[a - 1] -= 1
            p_list[b - 1] += 1

        judge = next((index for (index, d) in enumerate(p_list) if d == N - 1), -2)
        return judge + 1

