module.exports = {
    generateBuildId: async () => {
      // This could be anything, using the latest git hash
      return process.env.GIT_HASH
    },
  }